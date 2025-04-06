import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Search, Download, FileIcon } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Biblioteca de Recursos</h1>
          <p className="text-muted-foreground">Acesse materiais, documentos e guias para sua prática profissional</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar recursos..." className="w-full md:w-[300px] pl-8" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="guides">Guias</TabsTrigger>
            <TabsTrigger value="templates">Modelos</TabsTrigger>
            <TabsTrigger value="articles">Artigos</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <Button variant="outline">Carregar Mais</Button>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((resource) => resource.type === "Documento")
              .map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
          </div>
        </TabsContent>

        {/* Outras abas seguiriam o mesmo padrão */}
      </Tabs>
    </div>
  )
}

interface Resource {
  id: string
  title: string
  description: string
  type: string
  category: string
  downloads: number
  isPremium: boolean
  author: string
  date: string
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{resource.type}</Badge>
              {resource.isPremium && <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Premium</Badge>}
            </div>
            <CardTitle className="text-lg">{resource.title}</CardTitle>
            <CardDescription>{resource.category}</CardDescription>
          </div>
          <div className="rounded-full p-2 bg-muted">
            {resource.type === "Documento" && <FileText className="h-5 w-5 text-blue-500" />}
            {resource.type === "Guia" && <BookOpen className="h-5 w-5 text-green-500" />}
            {resource.type === "Modelo" && <FileIcon className="h-5 w-5 text-purple-500" />}
            {resource.type === "Artigo" && <BookOpen className="h-5 w-5 text-orange-500" />}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>Por {resource.author}</span>
          <span>{resource.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{resource.downloads} downloads</span>
          <Button size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            {resource.isPremium ? "Acessar" : "Download"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Dados de exemplo
const resources = [
  {
    id: "1",
    title: "Modelo de contrato para atendimento online",
    description:
      "Documento com modelo de contrato para atendimento psicológico online, de acordo com as normas do CFP.",
    type: "Documento",
    category: "Documentos Legais",
    downloads: 234,
    isPremium: false,
    author: "Equipe PsiConnect",
    date: "10/05/2023",
  },
  {
    id: "2",
    title: "Guia de marketing ético para psicólogos",
    description:
      "E-book com orientações sobre como divulgar seu trabalho de forma ética e eficiente, respeitando o código de ética profissional.",
    type: "Guia",
    category: "Marketing",
    downloads: 187,
    isPremium: true,
    author: "Ana Oliveira",
    date: "22/03/2023",
  },
  {
    id: "3",
    title: "Checklist para abertura de consultório",
    description:
      "Lista de verificação com todos os passos necessários para abrir um consultório de psicologia, incluindo aspectos legais e práticos.",
    type: "Modelo",
    category: "Empreendedorismo",
    downloads: 156,
    isPremium: false,
    author: "Carlos Mendes",
    date: "15/02/2023",
  },
  {
    id: "4",
    title: "Técnicas de intervenção em crises de ansiedade",
    description:
      "Artigo com técnicas baseadas em evidências para intervenção em crises de ansiedade, com exemplos práticos de aplicação.",
    type: "Artigo",
    category: "Clínica",
    downloads: 203,
    isPremium: true,
    author: "Dra. Maria Santos",
    date: "05/04/2023",
  },
  {
    id: "5",
    title: "Modelo de prontuário psicológico",
    description:
      "Template de prontuário psicológico completo, seguindo as diretrizes do CFP e com campos personalizáveis.",
    type: "Modelo",
    category: "Documentos Clínicos",
    downloads: 178,
    isPremium: true,
    author: "Equipe PsiConnect",
    date: "18/01/2023",
  },
  {
    id: "6",
    title: "Guia de precificação para psicólogos",
    description:
      "Guia completo sobre como precificar serviços psicológicos, considerando mercado, formação e especialização.",
    type: "Guia",
    category: "Finanças",
    downloads: 145,
    isPremium: true,
    author: "Pedro Costa",
    date: "30/03/2023",
  },
]

