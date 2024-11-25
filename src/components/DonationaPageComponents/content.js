import { PageContent } from "../mainContent.styled";
import { ImageContainer } from "../mainContent.styled";
import picture2 from "../../assets/picture2.jpg";

export const MainContent = () => {

  return (
    <div>
      <PageContent>
        <h3> <b>  Fundraising for those affected by the recent fire in Barangay Pasonanca </b> </h3>
        <p id="pCredits"> Creator: Maria Donicia Solomon </p>
        <ImageContainer>
          <img src={picture2} alt="Fundraising event for fire victims in Barangay Pasonanca" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
        </ImageContainer>
        <p id="pContent"> Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </PageContent>
    </div>
  );
};

export default MainContent;
