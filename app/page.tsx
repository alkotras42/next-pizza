import {Categories, Container, SortPopup, Title, TopBar} from '@/components/shared';
import {Button} from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <div style={{height: '3000px'}}></div>
    </>
  );
}
