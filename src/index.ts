import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";

const service = new k8s.core.v1.Service(
  "google",
  {
    metadata: { name: "google", annotations: {} },
    spec: { type: "ExternalName", externalName: "www.google.com" }
  },
  { import: "default/google" }
);
