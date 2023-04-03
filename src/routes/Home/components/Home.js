import React from 'react'
import {
  Container,
  Title,
  TitleContainer,
  CardContainer,
  Description,
  GartnerBanner,
  GartnerLogo,
  GartnerText,
  GartnerLink,
  GartnerBannerContainer
} from '../styled/home'
import { Card } from '../../../common/Card/components/Card'
import { CardContent } from '../../../common/CardContent/components/CardContent'

export function Home () {
  return (
    <Container>
      <TitleContainer>
        <Title>Explore our products and services</Title>
        <Description>
          Discover how our products and services can simplify your
          infrastructure, build agility into your business, balance the risk and
          reward of the cloud, and make security integral to your busines
        </Description>
      </TitleContainer>

      <GartnerBanner>
        <GartnerBannerContainer>
          <GartnerLogo />
          <GartnerText>
            2023 Gartner® Magic Quadrant™ Leader for Network Services, Global
          </GartnerText>
          <GartnerLink>Read full report</GartnerLink>
        </GartnerBannerContainer>
      </GartnerBanner>

      <CardContainer>
        <Card
          title='Contacts'
          content={<CardContent description='Number of contacts' status='2' />}
        />
        <Card
          title='Incoming calls'
          disabled
          content={<p>Content not available</p>}
        />
        <Card
          title='Outgoing calls'
          disabled
          content={<p>Content not available</p>}
        />
        <Card
          title='Voicemail'
          disabled
          content={<p>Content not available</p>}
        />
      </CardContainer>
    </Container>
  )
}
