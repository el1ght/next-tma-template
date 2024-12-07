export interface UserDetails {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
    photo_url?: string;
}

export interface Product {
    id: string;
    active?: boolean;
    name?: string;
    description?: string;
    image?: string;
}

export interface Song {
    id: string;
    user_id: string;
    author: string;
    title: string;
    image_path: string;
    url: string;
}

export interface Price {
    id: string;
    product_id?: string;
    active?: boolean;
    description?: string;
    unit_amount?: number;
    products?: Product;
}

export interface Subscription {
    id: string;
    user_id: string;
    // status?:
    // metadata?:
    price_id?: string;
    quantity?: number;
    cancel_at_period_end?: boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    cancel_at?: string;
    cancelled_at?: string;
    trial_start?: string;
    trial_end?: string;
    prices?: Price;
}