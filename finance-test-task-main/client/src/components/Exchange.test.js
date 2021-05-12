import renderer from 'react-test-renderer';
import Exchange from './Exchange.jsx';

test("On change prop exchange Exchange text must change from 666 to 000", () => {
    const component = renderer.create(
      <Exchange exchange ={"666"} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.exchange = "000";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.exchange = "666";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
});