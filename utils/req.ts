const Decoder = new TextDecoder("utf-8");

export async function body(
  req: Request,
): Promise<{ [key: string]: string | number }> {
  const stream = await req.body?.getReader().read();
  const decoded = Decoder.decode(stream?.value);
  return decoded ? JSON.parse(decoded) : {};
}
