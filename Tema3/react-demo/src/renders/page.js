import Text from "./text";
import Button from "./button";
import API from "./api";
import ButtonAPI from "./apiButton";

function Page() {
  return (
    <div id="content">
        <div> <Text /> </div>
        <div> <Button /> </div>
        <div> <API /> </div>
        <div> <ButtonAPI /> </div>
    </div>
  )
}

export default Page;
