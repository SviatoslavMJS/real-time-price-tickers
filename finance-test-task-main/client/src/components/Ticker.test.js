import renderer from 'react-test-renderer';
import Ticker from './Ticker';

const startTicker = { "ticker": "AMZN", "exchange": "NASDAQ", "price": 260.34, "change": 128.71, "change_percent": 0.60, "dividend": 0.07, "yield": 0.42, "last_trade_time": "2021-04-30T11:53:21.000Z" };
const changeTicker = { "ticker": "TSLA", "exchange": "NASDAQ", "price": 272.13, "change": 158.76, "change_percent": 0.10, "dividend": 0.96, "yield": 1.00, "last_trade_time": "2021-04-30T11:53:21.000Z" };

test('On change prop vector in Ticker child components must change class names', () => {
    const component = renderer.create(
        <Ticker ticker={startTicker} color={"#666666"} vector={true} />,
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

test('On change prop ticker in Ticker child components must change Text content', () => {
    const component = renderer.create(
        <Ticker ticker={startTicker} color={"#666666"} vector={true} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.ticker = changeTicker;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.ticker = startTicker;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('On change prop color in Ticker component Company must change style color', () => {
    const component = renderer.create(
        <Ticker ticker={startTicker} color={"#666666"} vector={true} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.color = "#E31937";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.color = "#666666";

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});