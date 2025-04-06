import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MessageSquare, Search, Plus } from "lucide-react"

export default function ForumPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fórum</h1>
          <p className="text-muted-foreground">Participe das discussões e compartilhe conhecimentos</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar discussões..." className="w-full md:w-[300px] pl-8" />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nova Discussão
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="clinical">Clínica</TabsTrigger>
            <TabsTrigger value="career">Carreira</TabsTrigger>
            <TabsTrigger value="regulation">Regulamentação</TabsTrigger>
            <TabsTrigger value="marketing">Divulgação</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Discussões Recentes</CardTitle>
              <CardDescription>Discussões mais recentes de todas as categorias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {forumDiscussions.map((discussion, index) => (
                  <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:block rounded-full p-3 bg-muted">
                        <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Badge variant="outline">{discussion.category}</Badge>
                          <span className="text-xs text-muted-foreground">{discussion.replies} respostas</span>
                          {discussion.isHot && (
                            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <Link href={`/forum/${discussion.id}`} className="text-lg font-semibold hover:underline">
                          {discussion.title}
                        </Link>
                        <p className="text-muted-foreground mt-1">{discussion.preview}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm">
                          <span className="text-muted-foreground">
                            Por <span className="font-medium text-foreground">{discussion.author}</span>
                          </span>
                          <span className="text-muted-foreground">{discussion.time}</span>
                          <span className="text-muted-foreground">
                            Última resposta por{" "}
                            <span className="font-medium text-foreground">{discussion.lastReplyBy}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center mt-6">
                <Button variant="outline">Carregar Mais</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clinical" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Discussões sobre Clínica</CardTitle>
              <CardDescription>Discussões relacionadas à prática clínica</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {forumDiscussions
                  .filter((discussion) => discussion.category === "Clínica")
                  .map((discussion, index) => (
                    <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:block rounded-full p-3 bg-muted">
                          <MessageSquare className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <Badge variant="outline">{discussion.category}</Badge>
                            <span className="text-xs text-muted-foreground">{discussion.replies} respostas</span>
                            {discussion.isHot && (
                              <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <Link href={`/forum/${discussion.id}`} className="text-lg font-semibold hover:underline">
                            {discussion.title}
                          </Link>
                          <p className="text-muted-foreground mt-1">{discussion.preview}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm">
                            <span className="text-muted-foreground">
                              Por <span className="font-medium text-foreground">{discussion.author}</span>
                            </span>
                            <span className="text-muted-foreground">{discussion.time}</span>
                            <span className="text-muted-foreground">
                              Última resposta por{" "}
                              <span className="font-medium text-foreground">{discussion.lastReplyBy}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex items-center justify-center mt-6">
                <Button variant="outline">Carregar Mais</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Outras abas seguiriam o mesmo padrão */}
      </Tabs>
    </div>
  )
}

// Dados de exemplo
const forumDiscussions = [
  {
    id: "1",
    category: "Clínica",
    title: "Desafios na clínica com adolescentes",
    preview:
      "Gostaria de compartilhar algumas experiências e dificuldades que tenho encontrado no atendimento de adolescentes, especialmente aqueles que vêm 'obrigados' pelos pais. Como vocês lidam com essa resistência inicial?",
    author: "Maria Santos",
    time: "Há 3 horas",
    replies: 12,
    isHot: true,
    lastReplyBy: "Carlos Mendes",
  },
  {
    id: "2",
    category: "Carreira",
    title: "Dúvidas sobre precificação de consultas",
    preview:
      "Estou começando minha carreira como psicólogo clínico e tenho dúvidas sobre como precificar minhas consultas. Alguém poderia compartilhar experiências ou dicas sobre esse tema?",
    author: "João Silva",
    time: "Há 1 dia",
    replies: 8,
    isHot: false,
    lastReplyBy: "Ana Oliveira",
  },
  {
    id: "3",
    category: "Regulamentação",
    title: "Atendimento online: aspectos legais",
    preview:
      "Com a expansão do atendimento online, quais são os principais aspectos legais que devemos observar? O CFP tem novas orientações sobre isso?",
    author: "Ana Oliveira",
    time: "Há 2 dias",
    replies: 15,
    isHot: true,
    lastReplyBy: "Pedro Costa",
  },
  {
    id: "4",
    category: "Divulgação",
    title: "Estratégias éticas de marketing para psicólogos",
    preview:
      "Quais estratégias de marketing vocês têm utilizado para divulgar seu trabalho de forma ética e eficiente? Tenho dúvidas sobre o que é permitido pelo código de ética.",
    author: "Pedro Costa",
    time: "Há 3 dias",
    replies: 10,
    isHot: false,
    lastReplyBy: "Maria Santos",
  },
  {
    id: "5",
    category: "Clínica",
    title: "Intervenções em casos de ansiedade",
    preview:
      "Tenho atendido muitos casos de ansiedade ultimamente e gostaria de compartilhar e conhecer novas técnicas de intervenção que têm sido eficazes na experiência de vocês.",
    author: "Luiza Mendes",
    time: "Há 4 dias",
    replies: 18,
    isHot: true,
    lastReplyBy: "João Silva",
  },
]

