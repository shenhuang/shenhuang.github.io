function ProcessBattle(enemyPower)
{
    EVENT_PENDING = true
    BATTLE_PENDING = true
    RegisterScreenTouch(() => {
            let HPLoss = enemyPower - CharacterStats.POWER
            if(HPLoss < 0)
            {
                CurrentEventDialog.appendChild(NewEventDialogContent(`敌人根本不是你的对手，你毫发无损！`))
            }
            else
            {
                CurrentEventDialog.appendChild(NewEventDialogContent(`你在战斗中受伤，损失了${HPLoss}点体力！`))
                UpdateHP(-HPLoss)
            }
            ScrollToBottom()
            EVENT_PENDING = false
    }, true)
}