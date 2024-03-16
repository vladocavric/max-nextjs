type Product = {
    id: string | number,
    title: string,
    description: string
  }
export async function getData(): Promise<{ products: Product[] }>  {
    return {
      products: [{
        id: 1, title: 'product 1', description: 'description for product 1'
      }]
    }
  }