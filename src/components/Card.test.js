import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
    beforeEach(() => {
        render(<Card />);
    });

    test('Card renders and contains spinner svg', () => {
        const spinnerCard = document.getElementsByClassName("spinner-card");
        expect(spinnerCard[0]).toBeInTheDocument();
        const svg = document.getElementsByTagName("svg");
        expect(svg[0]).toBeInTheDocument();
    })
});

