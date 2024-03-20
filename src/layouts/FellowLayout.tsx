import { Box, Flex, Text } from '@chakra-ui/react'

import StarsImage from '@/public/images/stars.png'

import ContentContainer from '@/components/ContentContainer'
import { Image } from '@/components/Image'
import FellowLayoutHero from '@/components/Heroes/FellowLayoutHero'
import { MARKDOWN_CONTENT_MAX_WIDTH } from '@/utils/constants'

export const FellowLayout = ({ children, frontmatter }) => {
  const { title, fellowName, country, tags, image } = frontmatter

  return (
    <>
      <Box pos='absolute' zIndex={-1} top={-4} left={0} right={0}>
        <Image src={StarsImage} alt="Stars" w='100%' />
      </Box>
      <ContentContainer>
        <FellowLayoutHero
          title={title}
          fellowName={fellowName}
          country={country}
          tags={tags}
          image={image}
        />
        <Flex px={{base: 6 , md: 16}} gap={16} pt={4} justifyContent="space-between">
          <Box w="auto" maxW={MARKDOWN_CONTENT_MAX_WIDTH} flex="1">
            {children}
          </Box>
          <Box w="300px">
            <Text>Table of contents</Text>
          </Box>
        </Flex>
      </ContentContainer>
    </>
  )
}