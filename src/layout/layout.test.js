import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../component/Header'
import Pokemons from '../component/Pokemons/Pokemons'
import Layout from './layout'

configure({adapter: new Adapter()});

describe('<Layout />', () => {
    it('should render <Header /> element',() => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find(Header)).toHaveLength(1)
    })
})

describe('<Layout />', () => {
    it('should render <Pokemons /> element',() => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find(Pokemons)).toHaveLength(1)
    })
})