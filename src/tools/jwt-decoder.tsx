import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Unlock } from "lucide-react";
import { useState } from "react";

export const JWTDecoder = () => {
  const [token, setToken] = useState("");
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");
  const [error, setError] = useState("");

  const decodeJWT = () => {
    try {
      setError("");
      const parts = token.split(".");
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format");
      }

      const header = JSON.parse(
        atob(parts[0].replace(/-/g, "+").replace(/_/g, "/"))
      );
      const payload = JSON.parse(
        atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"))
      );

      setDecodedHeader(JSON.stringify(header, null, 2));
      setDecodedPayload(JSON.stringify(payload, null, 2));
    } catch (err) {
      setError("Invalid JWT token");
      setDecodedHeader("");
      setDecodedPayload("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>JWT Token</Label>
        <Textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste your JWT token here..."
          className="min-h-[100px]"
        />
        <Button onClick={decodeJWT} disabled={!token} className="w-full">
          <Unlock className="h-4 w-4 mr-2" />
          Decode JWT
        </Button>
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      {decodedHeader && (
        <div className="space-y-2">
          <Label>Header</Label>
          <Textarea
            value={decodedHeader}
            readOnly
            className="min-h-[100px] font-mono text-sm"
          />
        </div>
      )}

      {decodedPayload && (
        <div className="space-y-2">
          <Label>Payload</Label>
          <Textarea
            value={decodedPayload}
            readOnly
            className="min-h-[150px] font-mono text-sm"
          />
        </div>
      )}
    </div>
  );
};
