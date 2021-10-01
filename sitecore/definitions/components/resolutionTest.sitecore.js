import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "resolutionTest",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "bgImage_object_1633097095062",
      type: CommonFieldTypes.Image,
      standardValue: ""
    }, {
      name: "src_object_1633097102021",
      type: CommonFieldTypes.Image,
      standardValue: "/graphics/default.png"
    }, {
      name: "text_string_1633097110123",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "text_string_1633097116082",
      type: CommonFieldTypes.RichText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual."
    }, {
      name: "href_object_1633097122400",
      type: CommonFieldTypes.GeneralLink,
      standardValue: "#"
    }]
  });
}
