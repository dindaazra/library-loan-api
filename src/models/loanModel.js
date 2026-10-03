import { supabase } from "../config/supabaseClient.js";

// READ - semua data + filter status
export const getAllLoans = async (status) => {
    let query = supabase
        .from("loans")
        .select("*")
        .order("loan_date", { ascending: false });

    if (status) {
        query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) throw error;

    return data;
};

// READ - berdasarkan ID
export const getLoanById = async (id) => {
    const { data, error } = await supabase
        .from("loans")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;

    return data;
};

// CREATE
export const createLoan = async (loanData) => {
    const { data, error } = await supabase
        .from("loans")
        .insert([loanData])
        .select()
        .single();

    if (error) throw error;

    return data;
};

// UPDATE
export const updateLoan = async (id, loanData) => {
    const { data, error } = await supabase
        .from("loans")
        .update(loanData)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};

// DELETE
export const deleteLoan = async (id) => {
    const { data, error } = await supabase
        .from("loans")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
};