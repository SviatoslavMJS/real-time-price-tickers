import renderer from 'react-test-renderer';
import ArrowUp from './ArrowUp';

test('Testing ArrowUp', () => {
    const component = renderer.create(
        <ArrowUp />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
