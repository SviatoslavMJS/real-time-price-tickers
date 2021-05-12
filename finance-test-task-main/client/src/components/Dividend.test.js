import renderer from 'react-test-renderer';
import Dividend from './Dividend';


test("On change prop dividend Dividend text must change from 666 to 000", () => {
    const component = renderer.create(
      <Dividend dividend={"666"} vector={true} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.dividend = "000";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.dividend = "666";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
});

test("On change prop vector Dividend class must change from green to red", () => {
    const component = renderer.create(
      <Dividend dividend={"666"} vector={true} />,
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