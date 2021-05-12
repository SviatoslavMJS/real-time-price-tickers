import renderer from 'react-test-renderer';
import Yield from './Yield.jsx';

test('On change prop vector in Yield class must change from green to red / text from +1.34 to -1.34', () => {
    const component = renderer.create(
      <Yield yield={"1.34"} vector={true}/>,
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

test('On change prop yield in Yield text must change from 222 to 555', () => {
  const component = renderer.create(
    <Yield yield={"222"} vector={true}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.yield = "555";

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.yield = "222";

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});