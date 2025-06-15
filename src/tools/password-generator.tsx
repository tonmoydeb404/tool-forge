"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Copy, RefreshCw } from "lucide-react";
import { useState } from "react";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState([12]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let result = "";
    for (let i = 0; i < length[0]; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Generated Password</Label>
        <div className="flex gap-2">
          <Input
            value={password}
            readOnly
            placeholder="Click generate to create password"
          />
          <Button size="sm" onClick={copyToClipboard} disabled={!password}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Length: {length[0]}</Label>
          <Slider
            value={length}
            onValueChange={setLength}
            max={50}
            min={4}
            step={1}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={includeUppercase}
              onCheckedChange={(checked) =>
                setIncludeUppercase(checked === true)
              }
              id="uppercase"
            />
            <Label htmlFor="uppercase">Include Uppercase (A-Z)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={includeLowercase}
              onCheckedChange={(checked) =>
                setIncludeLowercase(checked === true)
              }
              id="lowercase"
            />
            <Label htmlFor="lowercase">Include Lowercase (a-z)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={includeNumbers}
              onCheckedChange={(checked) => setIncludeNumbers(checked === true)}
              id="numbers"
            />
            <Label htmlFor="numbers">Include Numbers (0-9)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={includeSymbols}
              onCheckedChange={(checked) => setIncludeSymbols(checked === true)}
              id="symbols"
            />
            <Label htmlFor="symbols">Include Symbols (!@#$...)</Label>
          </div>
        </div>

        <Button onClick={generatePassword} className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Generate Password
        </Button>
      </div>
    </div>
  );
};
