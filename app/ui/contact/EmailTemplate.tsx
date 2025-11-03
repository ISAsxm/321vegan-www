import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { ContactFormData } from "@/types/definitions";
import { owner } from "@/assets/assets";

const boxInfos = {
  padding: "20px",
};
const paragraph = {
  fontSize: 16,
};

const EmailTemplate = ({
  first_name,
  last_name,
  email,
  subject,
  message,
}: ContactFormData) => {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Site web nouveau message</Preview>
      <Body
        style={{
          backgroundColor: "#f3f4f6",
          color: "#101828",
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
        }}
      >
        <Container
          style={{
            ...boxInfos,
            background: "#fff",
          }}
        >
          <Section
            style={{
              border: "1px solid rgb(16, 24, 40, 0.1)",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  Nouveau message envoyé depuis le site web.
                </Heading>

                <Text style={{ ...paragraph }}>
                  <b>De&nbsp;: </b>
                  {first_name} {last_name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email&nbsp;: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Sujet&nbsp;: </b>
                  {subject}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message&nbsp;: </b>
                  {message}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "rgb(16, 24, 40, 0.7)",
                  }}
                >
                  &copy; {new Date().getFullYear()} | {owner.name} |{" "}
                  {owner.website}
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
