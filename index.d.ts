/* Manually crafted */
declare module 'docker-parse-image' {
  type ParsedImageName = {
    registry: string | null;
    namespace: string | null;
    repository: string;
    tag: string | null;
    name: string;
    fullname: string;
  };

  export default function parse(name: string): null | ParsedImageName;
}
