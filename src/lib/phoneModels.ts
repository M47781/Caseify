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
    { id: 'iphone-12', name: 'iPhone 12', brand: 'Apple', dimensions: { width: 146, height: 296 } },
    { id: 'iphone-13', name: 'iPhone 13', brand: 'Apple', dimensions: { width: 146, height: 296 } },
    { id: 'iphone-14', name: 'iPhone 14', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-15', name: 'iPhone 15', brand: 'Apple', dimensions: { width: 147, height: 298 } },
    { id: 'iphone-15-pro', name: 'iPhone 15 Pro', brand: 'Apple', dimensions: { width: 147, height: 298 } },

    // Samsung
    { id: 'galaxy-s21', name: 'Galaxy S21', brand: 'Samsung', dimensions: { width: 151, height: 304 } },
    { id: 'galaxy-s22', name: 'Galaxy S22', brand: 'Samsung', dimensions: { width: 146, height: 296 } },
    { id: 'galaxy-s23', name: 'Galaxy S23', brand: 'Samsung', dimensions: { width: 146, height: 296 } },
    { id: 'galaxy-a52', name: 'Galaxy A52', brand: 'Samsung', dimensions: { width: 160, height: 320 } },
    { id: 'galaxy-a53', name: 'Galaxy A53', brand: 'Samsung', dimensions: { width: 160, height: 320 } },
    { id: 'galaxy-a54', name: 'Galaxy A54', brand: 'Samsung', dimensions: { width: 158, height: 318 } },

    // Xiaomi
    { id: 'redmi-note-11', name: 'Redmi Note 11', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'redmi-note-12', name: 'Redmi Note 12', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'redmi-note-13', name: 'Redmi Note 13', brand: 'Xiaomi', dimensions: { width: 162, height: 322 } },
    { id: 'poco-x5', name: 'Poco X5', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'poco-x6', name: 'Poco X6', brand: 'Xiaomi', dimensions: { width: 160, height: 320 } },
    { id: 'mi-13', name: 'Mi 13', brand: 'Xiaomi', dimensions: { width: 152, height: 304 } },
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
