import Company from "./Company.jsx";
import renderer from 'react-test-renderer';

test("On change prop company in Company text must change from APPL to SSSR", () => {
    const component = renderer.create(
      <Company color={"#666666"} company={"APPL"}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.company = "SSSR";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.company = "APPL";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
});

test("On change prop color in Company style color must be changed from #666666 to #0d0a08", () => {
    const component = renderer.create(
      <Company color={"#666666"} company={"APPL"}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.company = "#0d0a08";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.company = "#666666";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
});
