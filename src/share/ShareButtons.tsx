import {
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  FacebookIcon,
  RedditShareButton,
  TwitterShareButton,
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'react-share';

interface ShareButtonsProps{
    url:string
    size?:number
}

export function ShareButtons({ url, size }:ShareButtonsProps) {
  return (
    <>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={size} round />
      </TelegramShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={size} round />
      </RedditShareButton>
    </>
  );
}
