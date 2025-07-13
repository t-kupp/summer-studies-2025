import LazyImage from "./LazyImage";

// Static image imports
import image1 from "../../public/images/a_black_and_white_image_of_a_group_of_people.png";
import image2 from "../../public/images/a_black_and_white_logo.png";
import image3 from "../../public/images/a_black_and_white_picture_of_mountains_and_trees.png";
import image4 from "../../public/images/a_black_liquid_floating_in_the_air.jpg";
import image5 from "../../public/images/a_blue_and_orange_background.jpg";
import image6 from "../../public/images/a_close_up_of_a_person_with_wings.jpg";
import image7 from "../../public/images/a_drawing_of_a_sun_and_a_ball.png";
import image8 from "../../public/images/a_face_in_a_blue_light.jpeg";
import image9 from "../../public/images/a_group_of_bubbles_on_a_white_background.jpg";
import image10 from "../../public/images/a_man_sitting_in_a_chair.png";
import image11 from "../../public/images/a_painting_of_a_building_in_a_dark_landscape.png";
import image12 from "../../public/images/a_painting_of_a_building_in_the_desert.png";
import image13 from "../../public/images/a_painting_of_a_man_with_a_dripping_face.jpg";
import image14 from "../../public/images/a_painting_of_a_man_with_a_face_on_his_head.png";
import image15 from "../../public/images/a_painting_of_a_mountain.png";
import image16 from "../../public/images/a_pyramids_with_palm_trees.png";
import image17 from "../../public/images/a_skeleton_standing_on_a_pile_of_skulls.png";
import image18 from "../../public/images/a_statue_of_a_woman_with_wings_and_a_plant.png";
import image19 from "../../public/images/a_statue_of_a_woman_with_wings_and_wings.png";
import image20 from "../../public/images/a_tree_and_a_rock.png";
import image21 from "../../public/images/a_tree_in_the_snow.jpg";
import image22 from "../../public/images/a_white_lines_on_a_black_background.jpeg";
import image23 from "../../public/images/a_white_swirly_circle_on_a_black_background.png";
import image24 from "../../public/images/a_woman_with_long_hair_wearing_sunglasses.png";
import image25 from "../../public/images/two_black_and_white_images_of_mountains.jpg";

export default function ImageCarousel() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
  ];

  return (
    <div>
      <h2>ImageCarousel</h2>
      <div className="flex gap-4 overflow-x-auto overscroll-x-contain">
        {images.map((imageSrc, index) => (
          <LazyImage
            key={index}
            src={imageSrc}
            alt={`Image ${index + 1}`}
            height={600}
            width={800}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
}
