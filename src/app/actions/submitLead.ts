"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role key on server for secure bypass of RLS if needed, or stick to anon with RLS

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function submitLead(formData: any) {
  // 1. Honeypot check
  if (formData.website) {
    console.warn("Honeypot triggered by bot.");
    return { success: true }; // Silent fail
  }

  // 2. Server-side validation
  if (!formData.name || !formData.phone) {
    return { error: "Name and Phone are required." };
  }

  try {
    const estimatedPrice = `$${formData.priceRange.min.toLocaleString()} - $${formData.priceRange.max.toLocaleString()}`;
    
    // Combine missing fields into pool_size so we conform strictly to the existing schema
    const mappedPoolSize = `${formData.size} | Water: ${formData.waterConditions} | Access: ${formData.access}`;

    const { error } = await supabase
      .from('emd_leads_atlanta') // Still using the legacy table as requested by the current code
      .insert([
        {
          full_name: formData.name,
          phone: formData.phone,
          pool_type: formData.poolType,
          pool_size: mappedPoolSize,
          estimated_price_range: estimatedPrice,
          source_page: 'Tampa Home Calculator (Hardened)'
        }
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      return { error: "Database submission failed." };
    }

    return { success: true };
  } catch (err) {
    console.error("Action Error:", err);
    return { error: "An unexpected error occurred." };
  }
}
