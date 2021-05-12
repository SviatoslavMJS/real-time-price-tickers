import Price from "./Price.jsx";
import renderer from 'react-test-renderer';

test("On change prop price in Price text must change from 279.29 to 89", () => {
    const component = renderer.create(
      <Price price={"279.29"} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.component = "89";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.component = "279.29";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
});