import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'

const Videos = ({videos}) => {
  return (
  <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((item, idx)=>(
      <Box key={idx} >
        {item.id.videoid && <VideoCard video={item} />}
        {item.id.channelid && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
  )
}

export default Videos