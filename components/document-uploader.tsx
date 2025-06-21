"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Link, FileText, Check, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function DocumentUploader() {
  const [activeTab, setActiveTab] = useState("upload")
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState("")
  const [url, setUrl] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]

      // Check if file is a supported type
      const supportedTypes = [
        "text/plain",
        "text/markdown",
        "application/json",
        "text/csv",
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/svg+xml",
      ]

      if (supportedTypes.includes(selectedFile.type)) {
        setFile(selectedFile)
        setStatus("success")
        setMessage(`File "${selectedFile.name}" ready to process`)
      } else {
        setFile(null)
        setStatus("error")
        setMessage(`Unsupported file type: ${selectedFile.type}. Please upload a supported file type.`)
      }
    }
  }

  const handleTextSubmit = () => {
    if (text.trim()) {
      setStatus("success")
      setMessage("Text content received and ready to process")
    } else {
      setStatus("error")
      setMessage("Please enter some text content")
    }
  }

  const handleUrlSubmit = () => {
    if (url.trim() && isValidUrl(url)) {
      setStatus("success")
      setMessage("URL received and ready to process")
    } else {
      setStatus("error")
      setMessage("Please enter a valid URL")
    }
  }

  const isValidUrl = (string: string) => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  const handleProcess = () => {
    // This would connect to your actual processing logic
    alert("Processing would start here with your backend integration")
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Document</CardTitle>
        <CardDescription>Upload your document in a supported format or paste content directly</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="upload">
              <Upload className="mr-2 h-4 w-4" />
              File Upload
            </TabsTrigger>
            <TabsTrigger value="text">
              <FileText className="mr-2 h-4 w-4" />
              Text Input
            </TabsTrigger>
            <TabsTrigger value="url">
              <Link className="mr-2 h-4 w-4" />
              URL
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                accept=".txt,.md,.json,.csv,.png,.jpg,.jpeg,.gif,.webp,.svg"
              />
              <p className="text-sm text-muted-foreground">
                Supported formats: TXT, MD, JSON, CSV, PNG, JPG, GIF, WebP, SVG
              </p>
            </div>
          </TabsContent>

          <TabsContent value="text" className="space-y-4">
            <Textarea
              placeholder="Paste your document content here..."
              className="min-h-[200px]"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={handleTextSubmit}>Submit Text</Button>
          </TabsContent>

          <TabsContent value="url" className="space-y-4">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="url"
                placeholder="https://example.com/document"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button onClick={handleUrlSubmit}>Submit URL</Button>
            </div>
            <p className="text-sm text-muted-foreground">Enter a URL to a publicly accessible document or webpage</p>
          </TabsContent>
        </Tabs>

        {status !== "idle" && (
          <Alert variant={status === "success" ? "default" : "destructive"} className="mt-4">
            {status === "success" ? <Check className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertTitle>{status === "success" ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setFile(null)
            setText("")
            setUrl("")
            setStatus("idle")
          }}
        >
          Clear
        </Button>
        <Button onClick={handleProcess} disabled={status !== "success"}>
          Process Document
        </Button>
      </CardFooter>
    </Card>
  )
}
