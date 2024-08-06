import React from 'react';
import {Title} from './title';
import {FilterCheckbox} from './filter-checkbox';
import {Input} from '../ui';
import {RangeSlider} from './range-slider';
import {Check} from 'lucide-react';
import {CheckboxFilterGroup} from './checkbox-filter-group';

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({className}) => {
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} />
          <Input type='number' placeholder='10000' min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFilterGroup
        title='Ингридиенты'
        className='mt-5'
        limit={6}
        defaultItems={[
          {text: 'Сырный соус', value: '1'},
          {text: 'Моццарелла', value: '2'},
          {text: 'Пепперони', value: '3'},
          {text: 'Грибы', value: '4'},
          {text: 'Ветчина', value: '5'},
          {text: 'Оливки', value: '6'},
          {text: 'Томаты', value: '7'},
          {text: 'Бекон', value: '8'},
          {text: 'Ананас', value: '9'},
          {text: 'Курица', value: '10'},
        ]}
        items={[
          {text: 'Сырный соус', value: '1'},
          {text: 'Моццарелла', value: '2'},
          {text: 'Пепперони', value: '3'},
          {text: 'Грибы', value: '4'},
          {text: 'Ветчина', value: '5'},
          {text: 'Оливки', value: '6'},
          {text: 'Томаты', value: '7'},
          {text: 'Бекон', value: '8'},
          {text: 'Ананас', value: '9'},
          {text: 'Курица', value: '10'},
        ]}
      />
    </div>
  );
};
