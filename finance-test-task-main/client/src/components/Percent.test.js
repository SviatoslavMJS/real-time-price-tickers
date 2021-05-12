import renderer from 'react-test-renderer';
import Percent from './Percent.jsx';

test('On change prop vector in Percent class must change from green to red', () => {
    const component = renderer.create(
      <Percent percent={"111"} vector={true}/>,
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

test('On change prop percent in Percent text must change from 111 to 999', () => {
    const component = renderer.create(
      <Percent percent={"111"} vector={true}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.percent = "999";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.percent = "111";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});