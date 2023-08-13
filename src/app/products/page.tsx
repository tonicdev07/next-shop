import Cta from '@/components/cta';
import Feature from '@/components/feature';
import Product from '@/components/product';
import { ProductType } from '@/interfaces';

const ProductsPage = async () => {
	const res = await fetch('https://fakestoreapi.com/products?limit=19');
	const products: ProductType[] = await res.json();

	return (
		<main className='mx-auto min-h-screen max-w-5xl px-3 md:px-2 '>
			<Feature />
		
				<div className='grid text-center gap-0 md:gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
					{products.map(product => (
						<Product key={product.id} product={product} />
					))}
				</div>
	
			<Cta />
		</main>
	);
};

export default ProductsPage;