// Phone models configuration
export interface PhoneModel {
    id: string;
    name: string;
    brand: string;
    dimensions: {
        width: number;
        height: number;
    };
    caseImage?: string;
}

export const phoneModels: PhoneModel[] = [
    // iPhone
    { id: 'iphone-11', name: 'iPhone 11', brand: 'Apple', dimensions: { width: 150, height: 300 } },
    { id: 'iphone-11-pro', name: 'iPhone 11 Pro', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max', brand: 'Apple', dimensions: { width: 158, height: 320 } },
    { id: 'iphone-12', name: 'iPhone 12', brand: 'Apple', dimensions: { width: 146, height: 296 } },
    { id: 'iphone-12-pro', name: 'iPhone 12 Pro', brand: 'Apple', dimensions: { width: 146, height: 296 } },
    { id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', brand: 'Apple', dimensions: { width: 160, height: 320 } },
    { id: 'iphone-13', name: 'iPhone 13', brand: 'Apple', dimensions: { width: 146, height: 296 } },
    { id: 'iphone-13-pro', name: 'iPhone 13 Pro', brand: 'Apple', dimensions: { width: 146, height: 296 } },
    { id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', brand: 'Apple', dimensions: { width: 160, height: 320 } },
    { id: 'iphone-14', name: 'iPhone 14', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-14-pro', name: 'iPhone 14 Pro', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', brand: 'Apple', dimensions: { width: 160, height: 320 } },
    { id: 'iphone-15', name: 'iPhone 15', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-15-pro', name: 'iPhone 15 Pro', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', brand: 'Apple', dimensions: { width: 160, height: 320 } },
    { id: 'iphone-16', name: 'iPhone 16', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-16-pro', name: 'iPhone 16 Pro', brand: 'Apple', dimensions: { width: 149, height: 302 } },
    { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', brand: 'Apple', dimensions: { width: 163, height: 326 } },

    // Samsung Galaxy S Series
    { id: 'galaxy-s21', name: 'Galaxy S21', brand: 'Samsung', dimensions: { width: 151, height: 304 } },
    { id: 'galaxy-s21-plus', name: 'Galaxy S21+', brand: 'Samsung', dimensions: { width: 161, height: 322 } },
    { id: 'galaxy-s21-ultra', name: 'Galaxy S21 Ultra', brand: 'Samsung', dimensions: { width: 165, height: 330 } },
    { id: 'galaxy-s22', name: 'Galaxy S22', brand: 'Samsung', dimensions: { width: 146, height: 296 } },
    { id: 'galaxy-s22-plus', name: 'Galaxy S22+', brand: 'Samsung', dimensions: { width: 157, height: 314 } },
    { id: 'galaxy-s22-ultra', name: 'Galaxy S22 Ultra', brand: 'Samsung', dimensions: { width: 163, height: 326 } },
    { id: 'galaxy-s23', name: 'Galaxy S23', brand: 'Samsung', dimensions: { width: 146, height: 296 } },
    { id: 'galaxy-s23-plus', name: 'Galaxy S23+', brand: 'Samsung', dimensions: { width: 157, height: 314 } },
    { id: 'galaxy-s23-ultra', name: 'Galaxy S23 Ultra', brand: 'Samsung', dimensions: { width: 163, height: 326 } },
    { id: 'galaxy-s24', name: 'Galaxy S24', brand: 'Samsung', dimensions: { width: 147, height: 298 } },
    { id: 'galaxy-s24-plus', name: 'Galaxy S24+', brand: 'Samsung', dimensions: { width: 158, height: 316 } },
    { id: 'galaxy-s24-ultra', name: 'Galaxy S24 Ultra', brand: 'Samsung', dimensions: { width: 162, height: 324 } },

    // Samsung Galaxy A Series
    { id: 'galaxy-a14', name: 'Galaxy A14', brand: 'Samsung', dimensions: { width: 167, height: 334 } },
    { id: 'galaxy-a15', name: 'Galaxy A15', brand: 'Samsung', dimensions: { width: 160, height: 320 } },
    { id: 'galaxy-a34', name: 'Galaxy A34', brand: 'Samsung', dimensions: { width: 161, height: 322 } },
    { id: 'galaxy-a35', name: 'Galaxy A35', brand: 'Samsung', dimensions: { width: 161, height: 322 } },
    { id: 'galaxy-a52', name: 'Galaxy A52', brand: 'Samsung', dimensions: { width: 160, height: 320 } },
    { id: 'galaxy-a53', name: 'Galaxy A53', brand: 'Samsung', dimensions: { width: 160, height: 320 } },
    { id: 'galaxy-a54', name: 'Galaxy A54', brand: 'Samsung', dimensions: { width: 158, height: 318 } },
    { id: 'galaxy-a55', name: 'Galaxy A55', brand: 'Samsung', dimensions: { width: 161, height: 322 } },

    // Xiaomi
    { id: 'redmi-note-11', name: 'Redmi Note 11', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'redmi-note-12', name: 'Redmi Note 12', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'redmi-note-13', name: 'Redmi Note 13', brand: 'Xiaomi', dimensions: { width: 162, height: 322 } },
    { id: 'redmi-note-13-pro', name: 'Redmi Note 13 Pro', brand: 'Xiaomi', dimensions: { width: 161, height: 322 } },
    { id: 'poco-x5', name: 'Poco X5', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'poco-x6', name: 'Poco X6', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'mi-13', name: 'Mi 13', brand: 'Xiaomi', dimensions: { width: 152, height: 304 } },
    { id: 'mi-14', name: 'Mi 14', brand: 'Xiaomi', dimensions: { width: 152, height: 304 } },
];

// Get models grouped by brand
export function getModelsByBrand() {
    const brands: Record<string, PhoneModel[]> = {};
    phoneModels.forEach(model => {
        if (!brands[model.brand]) {
            brands[model.brand] = [];
        }
        brands[model.brand].push(model);
    });
    return brands;
}

// Get model by ID
export function getModelById(id: string): PhoneModel | undefined {
    return phoneModels.find(model => model.id === id);
}
