import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
    beforeEach(() => {
        render(<Spinner
            x={75}
            y={75}
            radius={40}
            startAngle={0}
            endAngle={360}
            color="blue"
            centerValue={"0%"}
            rotate={90}
            />);
    })
    test('SVG renders with correct namespace', () => {
        const spinner = document.querySelector('svg');
        expect(spinner).toHaveAttribute('xmlns');
        expect(spinner.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg')
    });

    test('1 group, 2 paths, 1 text render', () => {
        const groups = document.getElementsByTagName('g');
        expect(groups.length).toBe(1);
        const paths = document.getElementsByTagName('path');
        expect(paths.length).toBe(2);
        const texts = document.getElementsByTagName('text');
        expect(texts.length).toBe(1);
    });

    test('path 0 d is correct', () => {
        const path0 = document.getElementsByTagName('path')[0]
        expect(path0.getAttribute('d')).toBe('M 74.99999999999999 35 A 40 40 0 1 0 75.69809625749133 35.00609219374435');
    });

    test('path1 is correct', () => {
        const path1 = document.getElementsByTagName('path')[1]
        expect(path1.getAttribute('d')).toBe('M 74.99999999999999 35 A 40 40 0 1 0 75 35');
    });

})
