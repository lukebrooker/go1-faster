import Head from 'next/head'
import Image from 'next/image'
import Heading from '@go1d/go1d/build/components/Heading'
import Container from '@go1d/go1d/build/components/Container'
import Text from '@go1d/go1d/build/components/Text'
import View from '@go1d/go1d/build/components/View'
import ButtonFilled from '@go1d/go1d/build/components/ButtonFilled'
import Prose from '@go1d/go1d/build/components/Prose'
import SlatMini from '@go1d/go1d/build/components/SlatMini'
import VisuallyHidden from '@go1d/go1d/build/components/VisuallyHidden'
import IconGo1Logo from '@go1d/go1d/build/components/Icons/Go1Logo'
import IconPhone from '@go1d/go1d/build/components/Icons/Phone'
import IconSuccess from '@go1d/go1d/build/components/Icons/Success'
import IconChevronDown from '@go1d/go1d/build/components/Icons/ChevronDown'
import IconChevronUp from '@go1d/go1d/build/components/Icons/ChevronUp'
import Stack from '../components/stack'
import React from 'react'

const NavLink = ({ href, children, color="successLow", parent,  ...props }) => (
  <Stack flexDirection="row" gap={2} alignItems="center" paddingY={3} paddingX={[0,3]} element="a" href={href}>
    <Text display="inline-flex" fontWeight="medium" color={color} children={children} {...props} />
    {parent && <IconChevronDown size={1} color={color} />}
  </Stack>
)

const MetaDetails = ({ title = "", details = [], ...props }) => (
  <Stack gap={3} {...props}>
    <Heading semanticElement="h3" visualHeadingLevel="Heading 5">{title}</Heading>
    <Text>{details.map((detail, i) => (
      <React.Fragment key="i">
        {detail}
        {details.length - 1 !== i && <Text color="muted"> ･ </Text>}
      </React.Fragment>
    ))}</Text>
  </Stack>
)

const Panel = ({ children, ...props}) => (
  <Stack border={1} borderColor="delicate" borderRadius={4} backgroundColor="background" {...props}>
    {children}
  </Stack>
)

const Card = (props) => (
  <Stack gap={4} flexShrink={1} {...props}>
    <View borderRadius={4} overflow="hidden">
      <Image
        src="https://res.cloudinary.com/go1/image/upload/ar_1:1,c_fill,h_384/v1572421656/cqefsfriy2ixydjf6m8e.jpg"
        alt="Two women having a conversation"
        width={256}
        height={256}
        layout="responsive"
      />
    </View>
    <Stack gap={3}>
      <Heading semanticElement="h3" visualHeadingLevel="Heading 5">Let's TALK: How to Have Safe Conversation</Heading>
      <Stack gap={1}>
        <Text fontSize={1} fontWeight="medium">Softskills</Text>
        <Text fontSize={1} color="subtle">Course ･ 14 min</Text>
      </Stack>
    </Stack>
  </Stack>
)

export default function Home() {
  return (
    <Container color="default" backgroundColor="faint">
      <Head>
        <title>Working in children's services: Working ethically ･ Go1</title>
        <meta name="description" content="This is my description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack gap={[5, 7, 8]} minHeight="100vh">
        <View element="header" paddingX={[4, 5, 6]} paddingTop={4}>
          <Container contain="wide" flexDirection={["column-reverse", "column"]}>
            <View flexDirection="row">
              <Stack gap={2} marginLeft="auto" flexDirection="row" paddingY={[4, 3]} color="accent" element="a" href="tel:1300552914">
                <IconPhone /><Text>1300 552 914</Text>
              </Stack>
            </View>
            <Stack element="nav" gap={4} flexDirection="row" alignItems={["start","center"]}>
              <View element="a" href="/" color="accent"><VisuallyHidden>Go1</VisuallyHidden><IconGo1Logo size={8} /></View>
              <Stack element="nav" display={["none", "flex"]} gap={3} alignItems={["start","center"]} flexDirection={["column", "row"]}>
                <NavLink parent={true} href="/explore">Explore</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/solutions">Pricing</NavLink>
                <NavLink href="/insights">Insights</NavLink>
                <NavLink href="/community">Community</NavLink>
                <NavLink href="/company">Company</NavLink>
              </Stack>
              <Stack element="nav" gap={5} flexDirection="row" marginLeft="auto" alignItems="center">
                <NavLink href="/login">Login</NavLink>
                <ButtonFilled color="accent" href="/signup">Sign up</ButtonFilled>
              </Stack>
            </Stack>
          </Container>
        </View>
        <View element="main" paddingX={[4, 5, 6]}>
          <Container contain="wide" element="header">
            <Stack gap={[6, 7]} flexDirection={["column","row"]} alignItems={["center", "flex-start"]}>
              <View width={256} borderRadius={4} overflow="hidden">
                <Image
                  src="https://res.cloudinary.com/go1/image/upload/ar_1:1,c_fill,h_384/v1572421656/cqefsfriy2ixydjf6m8e.jpg"
                  alt="Two women having a conversation"
                  width={256}
                  height={256}
                  layout="responsive"
                  priority
                />
              </View>
              <Stack flexShrink={1} gap={[4, 4, 5]}>
                <Stack gap={3}>
                  <Text>Course ･ 257 Learners</Text>
                  <Heading semanticElement="h1" visualHeadingLevel="Heading 1" color="accent">
                    Working in children's services: Working ethically
                  </Heading>
                </Stack>
                <Text element="p" lineHeight="paragraph" fontSize={3}>This course is for new, trainee and future childhood educators who would like a better understanding of the role, specifically ethical issues and codes of conduct in the industry.</Text>
                <SlatMini
                  size="sm"
                  title="Created by Skillsoft"
                  bottomMeta={["12 lessons", "55m", "Updated Feb 6, 2019"]}
                />
                <Stack flexDirection={["column", "row"]} gap={3}>
                  <ButtonFilled href="/signup" color="accent">Unlock this course</ButtonFilled>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </View>
        <View paddingX={[4, 5, 6]}>
          <Container contain="wide">
            <Stack flexDirection={["column", "row"]} gap={[6, 7, 8]}>
              <Stack flexGrow={2} flexShrink={1} gap={[6, 7, 8]}>
                <Stack padding={[4, 5, 6]} gap={5} backgroundColor="successHigh" borderRadius={4}>
                  <Heading semanticElement="h2" visualHeadingLevel="Heading 2">What you'll learn</Heading>
                  <Stack element="ul" gap={4}>
                    <View flexDirection="row" alignItems="center" element="li"><IconSuccess size={2} /><Text fontSize={[2, 2, 3]} marginLeft={4}>What ‘ethics’ are, how they develop and how they influence you</Text></View>
                    <View flexDirection="row" alignItems="center" element="li"><IconSuccess size={2} /><Text fontSize={[2, 2, 3]} marginLeft={4}>What an ethical dilemma is</Text></View>
                    <View flexDirection="row" alignItems="center" element="li"><IconSuccess size={2} /><Text fontSize={[2, 2, 3]} marginLeft={4}>Ethical dilemmas you might be faced with in a service</Text></View>
                    <View flexDirection="row" alignItems="center" element="li"><IconSuccess size={2} /><Text fontSize={[2, 2, 3]} marginLeft={4}>How the ECA Code of Ethics can guide decision making</Text></View>
                  </Stack>
                </Stack>
                <Panel gap={[5, 5, 6]} padding={[4, 4, 5]}>
                  <Stack flexDirection={["column", "column", "row"]} gap={5}>
                  <MetaDetails
                      width={[null, null, 1/2]}
                      flexShrink={1}
                      title="Skill level"
                      details={["Beginner"]}
                    />
                    <MetaDetails
                      width={[null, null, 1/2]}
                      flexShrink={1}
                      title="Skills"
                      details={["Accounting", "Finances Management", "Human Resources", "Financial skills", "Market Skills"]}
                    />
                  </Stack>
                  <Stack flexDirection={["column", "column", "row"]} gap={[5]}>
                    <MetaDetails
                      width={[null, null, 1/2]}
                      flexShrink="1"
                      title="Related industries"
                      details={["Finance", "Human Resources"]}
                    />
                    <MetaDetails
                      width={[null, null, 1/2]}
                      flexShrink="1"
                      title="Related jobs"
                      details={["Accountant", "Finances Manager", "Economist"]}
                    />
                  </Stack>
                </Panel>
                <Stack gap={4}>
                  <Heading semanticElement="h2" visualHeadingLevel="Heading 3">Related resources</Heading>
                  <Stack gap={5} flexDirection="row">
                    <Card/>
                    <Card/>
                    <Card/>
                  </Stack>
                </Stack>
                <View element="hr" borderBottom={1} borderColor="delicate" />
                <Stack gap={5}>
                  <Heading semanticElement="h2" visualHeadingLevel="Heading 2">Description</Heading>
                  <Text fontSize={3} lineHeight="paragrap gap={5}h">Learn how to use Xero, and FAST!</Text>
                  <Text fontSize={3} lineHeight="paragraph">Gain an intermediate level of knowledge and learn how to use Xero Accounting to manage your own business accounts or your client’s accounts. This Xero training will set you up with a strong understanding and practical knowledge of Xero to advance your business or career.</Text>
                </Stack>
                <Stack gap={4}>
                  <Heading semanticElement="h2" visualHeadingLevel="Heading 2">Course overview</Heading>
                  <Panel element="button" padding={4}>
                    <Stack flexDirection="row" alignItems="center" gap={3}>
                      <Stack>
                        <Heading semanticElement="h3" visualHeadingLevel="Heading 5">Module 1: What is Let'sTALK?</Heading>
                        <Text color="subtle">4 lessons<Text color="muted"> ･ </Text>25mins</Text>
                      </Stack>
                      <View marginLeft="auto">
                        <IconChevronUp color="subtle" />
                      </View>
                    </Stack>
                  </Panel>
                  <Stack gap={3}>
                    <SlatMini
                      flexDirection="row-reverse"
                      size="sm"
                      title="Lesson title"
                      bottomMeta={["Video", "10m"]}
                    />
                    <SlatMini
                      flexDirection="row-reverse"
                      size="sm"
                      title="Lesson title"
                      bottomMeta={["Video", "10m"]}
                    />
                    <SlatMini
                      flexDirection="row-reverse"
                      size="sm"
                      title="Lesson title"
                      bottomMeta={["Video", "10m"]}
                    />
                    <SlatMini
                      flexDirection="row-reverse"
                      size="sm"
                      title="Lesson title"
                      bottomMeta={["Video", "10m"]}
                    />
                  </Stack>
                  <Panel element="button" padding={4}>
                    <Stack flexDirection="row" alignItems="center" gap={3}>
                      <Stack>
                        <Heading semanticElement="h3" visualHeadingLevel="Heading 5">Module 2: Something else</Heading>
                        <Text color="subtle">8 lessons<Text color="muted"> ･ </Text>30mins</Text>
                      </Stack>
                      <View marginLeft="auto">
                        <IconChevronDown color="subtle" />
                      </View>
                    </Stack>
                  </Panel>
                </Stack>
              </Stack>
              <Stack element="aside" flexGrow={1} width={[1, 1/3]}>
                <Panel gap={4} padding={[4, 4, 5]}>
                  <SlatMini
                    title="Skillsoft"
                    bottomMeta={[
                      ["APAC", "EMEA", "North America"],
                      ["49 resourses"]
                    ]}
                  />
                  <Text element="p" lineHeight="paragraph">
                    Skillsoft is an Australian-based content creator focused on strong narratives, high-quality design and just a little bit of fun to make sure people feel engaged, enriched and, most important of all, entertained when undertaking eLearning.
                  </Text>
                  <Text href="/" element="a" color="accent" fontWeight="medium">View more</Text>
                  <View element="hr" borderColor="delicate" borderBottom={1}/>
                  <Heading semanticElement="h4" visualHeadingLevel="Heading 4">More from Skillsoft</Heading>
                  <SlatMini
                    size="sm"
                    title="Resource title"
                    bottomMeta={["Course", "30m"]}
                  />
                  <SlatMini
                    size="sm"
                    title="Resource title"
                    bottomMeta={["Course", "30m"]}
                  />
                  <SlatMini
                    size="sm"
                    title="Resource title"
                    bottomMeta={["Course", "30m"]}
                  />
                  <Text href="/" element="a" color="accent" fontWeight="medium">View more</Text>
                </Panel>
              </Stack>
            </Stack>
          </Container>
        </View>
        <View element="footer" marginTop="auto">
          <View paddingY={6} paddingX={[4, 5, 6]} backgroundColor="successHighest" mode="dark">
            <Container contain="wide">
              <Stack paddingTop={[5, 6]} gap={[4, 6, 8]} flexDirection={["column", "column", "row"]}>
                <View>
                  <IconGo1Logo size={9} color="default" />
                </View>
                <Stack flexDirection="row" flexWrap="wrap" flexGrow={1} paddingTop={4}>
                  <Stack gap={4} width={[1/2, 1/3]} marginBottom={6} flexShrink={1}>
                    <Heading semanticElement="h3" visualHeadingLevel="Heading 5" color="dangerMid">Products</Heading>
                    <Stack gap={3}>
                      <Text element="a" href="https://www.go1.com/en-au/content-hub">Go1 Content Hub</Text>
                      <Text element="a" href="https://www.go1.com/en-au/go1-platform">Go1 Platform</Text>
                      <Text element="a" href="https://www.go1.com/en-au/integrations">Integrations</Text>
                    </Stack>
                  </Stack>
                  <Stack gap={4} width={[1/2, 1/3]} marginBottom={6} flexShrink={1}>
                    <Heading semanticElement="h3" visualHeadingLevel="Heading 5" color="dangerMid">Solutions</Heading>
                    <Stack gap={3}>
                      <Text element="a" href="https://www.go1.com/en-au/small-medium-business">Small business and startups</Text>
                      <Text element="a" href="https://www.go1.com/en-au/enterprise">Enterprise</Text>
                      <Text element="a" href="https://www.go1.com/en-au/go1-working-with-government">Government</Text>
                    </Stack>
                  </Stack>
                  <Stack gap={3} width={[1/2, 1/3]} marginBottom={6}>
                    <Heading semanticElement="h3" visualHeadingLevel="Heading 5" color="dangerMid">
                      <a href="https://www.go1.com/en-au/pricing">Pricing</a>
                    </Heading>
                  </Stack>
                  <Stack gap={4} width={[1/2, 1/3]} marginBottom={6} flexShrink={1}>
                    <Heading semanticElement="h3" visualHeadingLevel="Heading 5" color="dangerMid">Insights</Heading>
                    <Stack gap={3}>
                      <Text element="a" href="https://www.go1.com/en-au/blog">Blog</Text>
                      <Text element="a" href="https://www.go1.com/en-au/resources">Resources</Text>
                      <Text element="a" href="https://www.go1.com/en-au/events">Events</Text>
                      <Text element="a" href="https://www.go1.com/en-au/customer-stories">Customer stories</Text>
                    </Stack>
                  </Stack>
                  <Stack gap={4} width={[1/2, 1/3]} marginBottom={6} flexShrink={1}>
                    <Heading semanticElement="h3" visualHeadingLevel="Heading 5" color="dangerMid">Community</Heading>
                    <Stack gap={3}>
                      <Text element="a" href="https://www.go1.com/en-au/become-a-go1-affiliate">Become an Affiliate</Text>
                      <Text element="a" href="https://www.go1.com/en-au/become-a-go1-content-partner">Become a content partner</Text>
                      <Text element="a" href="https://help.go1.com/">Customer support</Text>
                      <Text element="a" href="https://www.go1.com/en-au/developers">Developer docs</Text>
                    </Stack>
                  </Stack>
                  <Stack gap={4} width={[1/2, 1/3]} marginBottom={6} flexShrink={1}>
                    <Heading semanticElement="h3" visualHeadingLevel="Heading 5" color="dangerMid">Company</Heading>
                    <Stack gap={3}>
                      <Text element="a" href="https://www.go1.com/en-au/about-us">About</Text>
                      <Text element="a" href="https://www.go1.com/en-au/management-team">Team</Text>
                      <Text element="a" href="https://www.go1.com/en-au/careers-go1">Careers</Text>
                      <Text element="a" href="https://www.go1.com/en-au/csr">CRS</Text>
                      <Text element="a" href="https://www.go1.com/en-au/contact-us">Contact</Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Container>
          </View>
          <View paddingY={6} paddingX={[4, 5, 6]} backgroundColor="faint" mode="dark">
            <Container contain="wide">
              <Stack gap={6}>
                <View><Text>Privacy<Text color="muted"> ･ </Text>Legal</Text></View>
                <View element="hr" borderBottom={1} borderColor="delicate" />
                <View><Text>© Copyright 2021<Text color="muted"> ･ </Text>All Rights Reserved</Text></View>
              </Stack>
            </Container>
          </View>
        </View>
      </Stack> 
    </Container>
  )
}
