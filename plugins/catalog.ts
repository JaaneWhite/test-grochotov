export type TypeCatalogItem = {
    id: number
    articul: string
    name: string
    shortName: string
    cartText: string
    description: string
    image: string
    minPrice: number
    maxPrice: number
}

export type TypeCartItem = TypeCatalogItem & {
    price: number
    count: number
}

export const catalogItems:TypeCatalogItem[] = [
    {
        id: 123456,
        articul: 'G2H1065',
        name: 'Вытяжное устройство G2H',
        shortName: 'G2H',
        cartText: 'Вытяжное устройство для механической системы вентиляции',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        image: 'rectangle_72',
        minPrice: 6848,
        maxPrice: 56584
    },
    {
        id: 123457,
        articul: 'G2H1065',
        name: 'Вытяжное устройство BXC',
        shortName: 'BXC',
        cartText: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        image: 'rectangle_74',
        minPrice: 6848,
        maxPrice: 56584
    },
    {
        id: 123458,
        articul: 'G2H1065',
        name: 'Вытяжное устройство GHN',
        shortName: 'GHN',
        cartText: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        description: 'Вытяжное устройство с датчиком присутствия',
        image: 'rectangle_76',
        minPrice: 6848,
        maxPrice: 56584
    },
    {
        id: 123459,
        articul: 'G2H1065',
        name: 'Вытяжное устройство GHN',
        shortName: 'G2H',
        cartText: 'Вытяжное устройство с датчиком присутствия',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        image: 'rectangle_78',
        minPrice: 6848,
        maxPrice: 56584
    },
    {
        id: 123460,
        articul: 'G2H1065',
        name: 'Вытяжное устройство G2H',
        shortName: 'G2H',
        cartText: 'Вытяжное устройство для механической системы вентиляции',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        image: 'rectangle_72',
        minPrice: 6848,
        maxPrice: 56584
    },
    {
        id: 123461,
        articul: 'G2H1065',
        name: 'Вытяжное устройство BXC',
        shortName: 'BXC',
        cartText: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        image: 'rectangle_74',
        minPrice: 6848,
        maxPrice: 56584
    },
    {
        id: 123462,
        articul: 'G2H1065',
        name: 'Вытяжное устройство GHN',
        shortName: 'GHN',
        cartText: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        description: 'Вытяжное устройство с датчиком присутствия',
        image: 'rectangle_76',
        minPrice: 6848,
        maxPrice: 56584
    },
    {
        id: 123463,
        articul: 'G2H1065',
        name: 'Вытяжное устройство GHN',
        shortName: 'G2H',
        cartText: 'Вытяжное устройство с датчиком присутствия',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        image: 'rectangle_78',
        minPrice: 6848,
        maxPrice: 56584
    }
];