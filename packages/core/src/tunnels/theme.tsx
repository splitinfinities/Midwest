import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface State {
    readonly base: ThemeableColors,
    readonly complement: ThemeableColors,
    readonly dark: boolean,
    readonly light: boolean
    readonly ie: boolean
}

export default createProviderConsumer<State>({
    base: "red",
    complement: "blue",
    dark: false,
    light: false,
    ie: false
}, (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />);
