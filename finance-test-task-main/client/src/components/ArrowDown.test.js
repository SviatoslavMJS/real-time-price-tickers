import renderer from 'react-test-renderer';
import ArrowDown from './ArrowDown';

test('Testing ArrowUp', () => {
    const component = renderer.create(
        <ArrowDown />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
