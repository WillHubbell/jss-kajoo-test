import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Banner and Two Image QA test",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "src_object_0",
      type: CommonFieldTypes.Image,
      standardValue: "/graphics/default.png"
    }, {
      name: "src_object_1",
      type: CommonFieldTypes.Image,
      standardValue: "/graphics/default.png"
    }, {
      name: "src_object_2",
      type: CommonFieldTypes.Image,
      standardValue: "/graphics/default.png"
    }, {
      name: "text_string_4",
      type: CommonFieldTypes.RichText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air."
    }]
  });
}
