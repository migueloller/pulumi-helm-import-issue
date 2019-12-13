import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";

const chart = new k8s.helm.v2.Chart("google", {
  path: "./google",
  transformations: [addImportForHelmChart()]
});

function addImportForHelmChart() {
  return (obj: any, opts: pulumi.CustomResourceOptions): void => {
    if (obj != null && obj.metadata != null && obj.metadata.name) {
      opts.import = obj.metadata.namespace
        ? `${obj.metadata.namespace}/${obj.metadata.name}`
        : obj.metadata.name;
    }
  };
}
