import styled from "styled-components";
export const ProfileCardWrapper = styled.div`
    margin-bottom: 25px;
    img{
       -ms-interpolation-mode: bicubic;
       vertical-align: middle;
       border: 0;
       filter: ${props => props.status === "Inactive" ? "grayscale(1)" : ""};
    }

    .profile-card{
        width: 260px;
        border-radius: 2px;
        overflow: hidden;
        box-shadow: 0 2px 2px 0 ${props => props.theme.whiteOneToBlackOne};
        position: relative;
        margin: auto;
        margin-bottom: 2.5rem;
        background: ${props => props.status === "Active" ? props.theme.grey212121ToGreen3C494F : "gray"};       
        top: 50%;
        transition: 0.3s;
        height: 235px;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       
        &::before{            
                   
                display: ${props => props.status === "Inactive" ? "flex" : "none"};
                content: "Inactive";
                position: absolute;
                line-height: 32px;
                top: 3px;
                padding: 4px;
                right: -7px;
                width: 278px;                          
                justify-content: center;

                font-size: 1.5rem;
                font-weight: bold;            
                background: linear-gradient(45deg, #5e5d5d, #393939);
                color: rgb(255, 255, 255);
                z-index: 10;
              }             
        &:hover{
            background: ${props => props.status === "Active" ? props.theme.secondaryColor : props.theme.primaryLightColor};
        }

        header {
            display: block;
            position: relative;
            text-align: center;
            padding: 20px 0 20px;
            z-index: 1;
            overflow: hidden;
            

            .gatsby-image-wrapper, .old-gatsby-image-wrapper {
                display: block;
                margin: auto;
                border-radius: 100%;
                overflow: hidden;
                width: 140px;
                height: 140px;
                box-shadow: 0 1px 0 rgba(0,0,0,.1);
                opacity: 90%;
            }

            h4 {
                font-weight: 400;
                color: white;
                margin-top: 1rem;
                padding: 0;
            }
        }

        .meshmate {
            position: absolute;
            text-align: center;
            padding: 5px;
            border-radius: 100%;
            background: white;
            width: 44px;
            top: 130px;
            right: 50px;
            img {
                width: 28px;
                height: 28px;
                max-width: none;
            }
        }
    }
`;
