import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search, Users, ArrowRight } from "lucide-react"

export default function GroupsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Grupos de Interesse</h1>
          <p className="text-muted-foreground">
            Participe de grupos específicos por área de atuação e temas de interesse
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar grupos..." className="w-full md:w-[300px] pl-8" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="clinical">Clínica</TabsTrigger>
            <TabsTrigger value="organizational">Organizacional</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="educational">Educacional</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, index) => (
              <GroupCard key={index} group={group} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <Button variant="outline">Carregar Mais</Button>
          </div>
        </TabsContent>

        <TabsContent value="clinical" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups
              .filter((group) => group.category === "Clínica")
              .map((group, index) => (
                <GroupCard key={index} group={group} />
              ))}
          </div>
        </TabsContent>

        {/* Outras abas seguiriam o mesmo padrão */}
      </Tabs>
    </div>
  )
}

interface Group {
  id: string
  name: string
  description: string
  category: string
  members: number
  activity: string
  isMember: boolean
  isPremium: boolean
}

function GroupCard({ group }: { group: Group }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{group.category}</Badge>
              {group.isPremium && <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Premium</Badge>}
            </div>
            <CardTitle className="text-lg">{group.name}</CardTitle>
            <CardDescription>{group.members} membros</CardDescription>
          </div>
          <div className="rounded-full p-2 bg-muted">
            <Users className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>Atividade: {group.activity}</span>
        </div>
      </CardContent>
      <CardFooter>
        {group.isMember ? (
          <Button asChild className="w-full">
            <Link href={`/groups/${group.id}`}>
              Acessar Grupo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            Participar do Grupo
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

// Dados de exemplo
const groups = [
  {
    id: "1",
    name: "Psicologia Clínica - TCC",
    description: "Grupo para discussão de casos, técnicas e atualizações na abordagem Cognitivo-Comportamental.",
    category: "Clínica",
    members: 128,
    activity: "Alta",
    isMember: true,
    isPremium: false,
  },
  {
    id: "2",
    name: "Psicologia e Políticas Públicas",
    description: "Discussões sobre a atuação do psicólogo em políticas públicas, SUAS, SUS e outros contextos.",
    category: "Social",
    members: 87,
    activity: "Média",
    isMember: true,
    isPremium: false,
  },
  {
    id: "3",
    name: "Neuropsicologia",
    description: "Grupo para profissionais e estudantes interessados em neuropsicologia, avaliação e reabilitação.",
    category: "Clínica",
    members: 64,
    activity: "Média",
    isMember: true,
    isPremium: true,
  },
  {
    id: "4",
    name: "Psicologia Organizacional",
    description: "Discussões sobre práticas em psicologia organizacional e do trabalho, RH e desenvolvimento humano.",
    category: "Organizacional",
    members: 92,
    activity: "Alta",
    isMember: false,
    isPremium: false,
  },
  {
    id: "5",
    name: "Psicanálise Contemporânea",
    description: "Grupo dedicado ao estudo e discussão da psicanálise e suas aplicações contemporâneas.",
    category: "Clínica",
    members: 76,
    activity: "Alta",
    isMember: false,
    isPremium: true,
  },
  {
    id: "6",
    name: "Psicologia Escolar e Educacional",
    description: "Discussões sobre a atuação do psicólogo no contexto escolar e educacional.",
    category: "Educacional",
    members: 58,
    activity: "Média",
    isMember: false,
    isPremium: false,
  },
]

