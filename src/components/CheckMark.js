import mergeData from "vue-functional-data-merge"

export default {
  functional: true,
  props: {
    color: {
      type: String,
      default: "#14C18B"
    },
    fill: {
      type: String,
      default: "#FFFFFF"
    }
  },
  render(h, { props, data }) {
    return h(
      "svg",
      mergeData(data, {
        attrs: {
          "enable-background": "new 0 0 64 64",
          version: "1.1",
          viewBox: "0 0 64 64",
          "xml:space": "preserve",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }
      }),
      [
        h("circle", {
          attrs: {
            cx: "32",
            cy: "32",
            r: "32",
            fill: props.color
          }
        }),
        h("polygon", {
          attrs: {
            fill: props.fill,
            points: "43.266,18.345 27.915,37 21.465,30.725 17.211,35.34 28.413,46.236 47.989,22.449"
          }
        })
      ]
    )
  }
}
