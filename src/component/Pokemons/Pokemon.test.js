import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pokemons from './Pokemons'
import Pokemon from './Pokemon/Pokemon'

configure({adapter: new Adapter()});

describe('<PokemonItems />', () => {
    it('should render <Pokemon /> element',() => {
        const wrapper = shallow(<Pokemons />);
        expect(wrapper.find(Pokemon))
    })
})