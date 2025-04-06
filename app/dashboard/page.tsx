import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { BookOpen, MessageSquare, Users, Calendar, Bell, BarChart } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo(a) de volta, Ana Silva!</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notificações</span>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
          </Button>
          <Button asChild size="sm" className="h-9">
            <Link href="/profile">Editar Perfil</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="forum">Fórum</TabsTrigger>
          <TabsTrigger value="resources">Recursos</TabsTrigger>
          <TabsTrigger value="groups">Grupos</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visualizações do Perfil</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground">+19% em relação ao mês passado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Discussões Ativas</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">3 novas desde sua última visita</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recursos Salvos</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 novos recursos disponíveis</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Próximos Eventos</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Próximo: Intervisão em 2 dias</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Suas interações recentes na plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                      <div className={`rounded-full p-2 ${activity.iconBg}`}>{activity.icon}</div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Próximos Eventos</CardTitle>
                <CardDescription>Eventos agendados para os próximos dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                      <div className="min-w-[48px] text-center">
                        <p className="text-sm font-bold">{event.day}</p>
                        <p className="text-xs text-muted-foreground">{event.month}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                            Ver detalhes
                          </Button>
                          {event.canJoin && (
                            <Button size="sm" className="h-7 px-2 text-xs">
                              Participar
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="forum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Discussões Recentes</CardTitle>
              <CardDescription>Participe das discussões mais recentes no fórum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {forumDiscussions.map((discussion, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-muted">{discussion.category}</span>
                        <span className="text-xs text-muted-foreground">{discussion.replies} respostas</span>
                      </div>
                      <Link href={`/forum/${discussion.id}`} className="text-base font-medium hover:underline">
                        {discussion.title}
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2">{discussion.preview}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Por {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link href="/forum">Ver Todas as Discussões</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recursos Populares</CardTitle>
              <CardDescription>Materiais e recursos mais acessados pela comunidade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularResources.map((resource, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className={`rounded-full p-2 ${resource.iconBg}`}>{resource.icon}</div>
                    <div className="space-y-1">
                      <Link href={`/resources/${resource.id}`} className="text-base font-medium hover:underline">
                        {resource.title}
                      </Link>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link href="/resources">Ver Todos os Recursos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="groups" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seus Grupos</CardTitle>
              <CardDescription>Grupos de interesse que você participa</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {userGroups.map((group, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{group.name}</CardTitle>
                      <CardDescription>{group.members} membros</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">{group.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{group.activity} novas atividades</span>
                        <Button asChild size="sm">
                          <Link href={`/groups/${group.id}`}>Acessar</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link href="/groups">Explorar Mais Grupos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Dados de exemplo
const recentActivities = [
  {
    icon: <MessageSquare className="h-4 w-4 text-white" />,
    iconBg: "bg-blue-500",
    title: "Você comentou em uma discussão",
    description: "Respondeu à discussão 'Desafios na clínica com adolescentes'",
    time: "Há 2 horas",
  },
  {
    icon: <BookOpen className="h-4 w-4 text-white" />,
    iconBg: "bg-green-500",
    title: "Novo recurso salvo",
    description: "Você salvou o documento 'Modelo de contrato para atendimento online'",
    time: "Há 1 dia",
  },
  {
    icon: <Users className="h-4 w-4 text-white" />,
    iconBg: "bg-purple-500",
    title: "Entrou em um novo grupo",
    description: "Você se juntou ao grupo 'Psicologia Clínica - Abordagem Cognitivo-Comportamental'",
    time: "Há 2 dias",
  },
  {
    icon: <Calendar className="h-4 w-4 text-white" />,
    iconBg: "bg-orange-500",
    title: "Evento agendado",
    description: "Você se inscreveu para a intervisão 'Casos clínicos em TCC'",
    time: "Há 3 dias",
  },
]

const upcomingEvents = [
  {
    day: "15",
    month: "Jun",
    title: "Intervisão: Casos clínicos em TCC",
    time: "19:00 - 21:00",
    canJoin: true,
  },
  {
    day: "18",
    month: "Jun",
    title: "Capacitação: Marketing para Psicólogos",
    time: "14:00 - 16:00",
    canJoin: true,
  },
  {
    day: "22",
    month: "Jun",
    title: "Grupo de Estudos: Neuropsicologia",
    time: "18:30 - 20:30",
    canJoin: false,
  },
]

const forumDiscussions = [
  {
    id: "1",
    category: "Clínica",
    title: "Desafios na clínica com adolescentes",
    preview:
      "Gostaria de compartilhar algumas experiências e dificuldades que tenho encontrado no atendimento de adolescentes, especialmente...",
    author: "Maria Santos",
    time: "Há 3 horas",
    replies: 12,
  },
  {
    id: "2",
    category: "Carreira",
    title: "Dúvidas sobre precificação de consultas",
    preview:
      "Estou começando minha carreira como psicólogo clínico e tenho dúvidas sobre como precificar minhas consultas. Alguém poderia...",
    author: "João Silva",
    time: "Há 1 dia",
    replies: 8,
  },
  {
    id: "3",
    category: "Regulamentação",
    title: "Atendimento online: aspectos legais",
    preview:
      "Com a expansão do atendimento online, quais são os principais aspectos legais que devemos observar? O CFP tem...",
    author: "Ana Oliveira",
    time: "Há 2 dias",
    replies: 15,
  },
]

const popularResources = [
  {
    id: "1",
    icon: <BookOpen className="h-4 w-4 text-white" />,
    iconBg: "bg-blue-500",
    title: "Modelo de contrato para atendimento online",
    description:
      "Documento com modelo de contrato para atendimento psicológico online, de acordo com as normas do CFP.",
    type: "Documento",
    downloads: 234,
  },
  {
    id: "2",
    icon: <BookOpen className="h-4 w-4 text-white" />,
    iconBg: "bg-green-500",
    title: "Guia de marketing ético para psicólogos",
    description: "E-book com orientações sobre como divulgar seu trabalho de forma ética e eficiente.",
    type: "E-book",
    downloads: 187,
  },
  {
    id: "3",
    icon: <BookOpen className="h-4 w-4 text-white" />,
    iconBg: "bg-purple-500",
    title: "Checklist para abertura de consultório",
    description: "Lista de verificação com todos os passos necessários para abrir um consultório de psicologia.",
    type: "Checklist",
    downloads: 156,
  },
]

const userGroups = [
  {
    id: "1",
    name: "Psicologia Clínica - TCC",
    members: 128,
    description: "Grupo para discussão de casos, técnicas e atualizações na abordagem Cognitivo-Comportamental.",
    activity: 5,
  },
  {
    id: "2",
    name: "Psicologia e Políticas Públicas",
    members: 87,
    description: "Discussões sobre a atuação do psicólogo em políticas públicas, SUAS, SUS e outros contextos.",
    activity: 3,
  },
  {
    id: "3",
    name: "Neuropsicologia",
    members: 64,
    description: "Grupo para profissionais e estudantes interessados em neuropsicologia, avaliação e reabilitação.",
    activity: 2,
  },
  {
    id: "4",
    name: "Psicologia Organizacional",
    members: 92,
    description: "Discussões sobre práticas em psicologia organizacional e do trabalho, RH e desenvolvimento humano.",
    activity: 4,
  },
]

