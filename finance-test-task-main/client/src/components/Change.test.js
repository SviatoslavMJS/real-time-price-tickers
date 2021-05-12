import renderer from 'react-test-renderer';
import Change from './Change';


test('On change prop vector in Change class must change from green to red / child component from ArrowUp to ArrowDown', () => {
    const component = renderer.create(
      <Change change={"111"} vector={true}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.vector = false;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.vector = true;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});

test('On change prop change in Change text must change from 111 to 999', () => {
    const component = renderer.create(
      <Change change={"111"} vector={true}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.change = "999";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.change = "111";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});