"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Camera, Pencil, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
          <p className="text-muted-foreground">Gerencie suas informações pessoais e profissionais</p>
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <Button onClick={() => setIsEditing(false)}>
              <Save className="mr-2 h-4 w-4" /> Salvar Alterações
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              <Pencil className="mr-2 h-4 w-4" /> Editar Perfil
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Foto de Perfil</CardTitle>
            <CardDescription>Sua foto será exibida em seu perfil público</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative mb-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Foto de perfil" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="text-center">
              <h3 className="font-medium">Ana Silva</h3>
              <p className="text-sm text-muted-foreground">Psicóloga Clínica</p>
              <div className="flex justify-center mt-2">
                <Badge variant="outline">CRP 06/123456</Badge>
              </div>
              <div className="mt-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Plano Premium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="personal" className="flex-1">
                Informações Pessoais
              </TabsTrigger>
              <TabsTrigger value="professional" className="flex-1">
                Informações Profissionais
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">
                Configurações
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Atualize suas informações pessoais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue="Ana Silva" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" defaultValue="ana.silva@email.com" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="(11) 98765-4321" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Data de Nascimento</Label>
                      <Input id="birthdate" type="date" defaultValue="1985-05-15" disabled={!isEditing} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Psicóloga clínica com 10 anos de experiência em atendimento de adultos e adolescentes. Especialista em Terapia Cognitivo-Comportamental e Neuropsicologia."
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="professional" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Profissionais</CardTitle>
                  <CardDescription>Atualize suas informações profissionais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="crp">CRP</Label>
                      <Input id="crp" defaultValue="06/123456" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Especialização</Label>
                      <Select defaultValue="tcc" disabled={!isEditing}>
                        <SelectTrigger id="specialization">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tcc">Terapia Cognitivo-Comportamental</SelectItem>
                          <SelectItem value="psicanalise">Psicanálise</SelectItem>
                          <SelectItem value="humanista">Humanista</SelectItem>
                          <SelectItem value="sistemica">Sistêmica</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Anos de Experiência</Label>
                      <Input id="experience" type="number" defaultValue="10" disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Localização</Label>
                      <Input id="location" defaultValue="São Paulo, SP" disabled={!isEditing} />
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <h3 className="font-medium">Disponibilidade para Atendimento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Valor da Sessão (R$)</Label>
                        <Input id="price" type="number" defaultValue="150" disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="social-price">Valor Social (R$)</Label>
                        <Input id="social-price" type="number" defaultValue="80" disabled={!isEditing} />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="available" defaultChecked={true} disabled={!isEditing} />
                      <Label htmlFor="available">Disponível para novos atendimentos</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="online" defaultChecked={true} disabled={!isEditing} />
                      <Label htmlFor="online">Atendimento online</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="in-person" defaultChecked={true} disabled={!isEditing} />
                      <Label htmlFor="in-person">Atendimento presencial</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                  <CardDescription>Gerencie as configurações da sua conta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="font-medium">Notificações</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="email-notifications" defaultChecked={true} disabled={!isEditing} />
                        <Label htmlFor="email-notifications">Receber notificações por e-mail</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="forum-notifications" defaultChecked={true} disabled={!isEditing} />
                        <Label htmlFor="forum-notifications">Notificações de fórum</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="event-notifications" defaultChecked={true} disabled={!isEditing} />
                        <Label htmlFor="event-notifications">Lembretes de eventos</Label>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <h3 className="font-medium">Privacidade</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="profile-visibility" defaultChecked={true} disabled={!isEditing} />
                        <Label htmlFor="profile-visibility">Perfil visível para outros usuários</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="show-online-status" defaultChecked={true} disabled={!isEditing} />
                        <Label htmlFor="show-online-status">Mostrar status online</Label>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <h3 className="font-medium">Segurança</h3>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Alterar Senha
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

