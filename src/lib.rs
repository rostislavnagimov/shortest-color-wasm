use wasm_bindgen::prelude::*;
use shortest_color::shorten_css_color;

#[wasm_bindgen]
pub fn shorten_css_color_js(input: &str) -> String {
    shorten_css_color(input)
}
